{ pkgs ? import <nixpkgs> {} }:

let
  inherit (pkgs) lib; # lib = pkgs.lib
in

pkgs.mkShell {
  nativeBuildInputs = [ 
    pkgs.nodejs
    pkgs.python3
    (pkgs.writers.writeDashBin "deploy-client" ''
      # usage: nix-shell --run deploy-client
      set -efu
      nx build client
      rsync -acv dist/apps/client/ shell.c-base.org:public_html/
      # keep only one css file on server
      ssh shell.c-base.org ls -t public_html/styles.*.css \| sed 1d \| xargs -r rm -v
    '')
  ];


  shellHook = ''
    # DATABASE_PASSWORD must be set in .env
    . ${lib.escapeShellArg (toString ./.)}/apps/server/.env
    export PATH=$PATH:${lib.escapeShellArg (toString ./.)}/node_modules/.bin
    export DATABASE_URL=postgresql://"$LOGNAME":"$DATABASE_PASSWORD"@localhost/tictactoe # HACK spiced-pg requires the username followed by a colon and a pwd to not die
  '';
}
