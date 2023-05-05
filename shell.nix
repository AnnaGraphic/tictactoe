{ pkgs ? import <nixpkgs> {} }:

let
  inherit (pkgs) lib; # lib = pkgs.lib
in

pkgs.mkShell {
  nativeBuildInputs = [ 
    pkgs.nodejs 
  ];
  shellHook = ''
    # DATABASE_PASSWORD must be set in .env
    . ${lib.escapeShellArg (toString ./.)}/apps/server/.env
    export PATH=$PATH:${lib.escapeShellArg (toString ./.)}/node_modules/.bin
    export DATABASE_URL=postgresql://"$LOGNAME":"$DATABASE_PASSWORD"@localhost/tictactoe # HACK spiced-pg requires the username followed by a colon and a pwd to not die
  '';
}
