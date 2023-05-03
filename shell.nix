{ pkgs ? import <nixpkgs> {} }:

let
  inherit (pkgs) lib; # lib = pkgs.lib
in

pkgs.mkShell {
  nativeBuildInputs = [ 
    pkgs.nodejs 
  ];
  shellHook = ''
    export PATH=$PATH:${lib.escapeShellArg (toString ./.)}/node_modules/.bin
    export DATABASE_URL=postgresql:///tictactoe
  '';


}
