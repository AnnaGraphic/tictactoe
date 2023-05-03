{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  nativeBuildInputs = [ 
    pkgs.nodejs 
  ];
  shellHook = ''
    PATH=$PATH:${toString ./.}/node_modules/.bin
  '';
}
