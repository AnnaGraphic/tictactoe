{ pkgs ? import <nixpkgs> {} }:

let
  inherit (pkgs) lib;
in

pkgs.mkShell {
  nativeBuildInputs = [ 
    pkgs.nodejs 
  ];
  shellHook = ''
    export PATH=$PATH:${lib.escapeShellArg (toString ./.)}/node_modules/.bin
  '';
}
