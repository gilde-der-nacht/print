# Displays info when running `just` without subcommand
default:
    @just --list

update:
    git pull -r
    nix flake update --flake ./.nix-env

start:
    cd fresh-print && deno task start
