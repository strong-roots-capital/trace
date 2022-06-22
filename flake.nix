{
  description = "Tap functions";

  inputs = {
    flake-utils.url = "github:numtide/flake-utils";
    pre-commit-hooks.url = "github:ericcrosson/pre-commit-hooks.nix/add-eslint";
  };

  outputs = {
    self,
    nixpkgs,
    flake-utils,
    pre-commit-hooks,
  }:
    flake-utils.lib.eachDefaultSystem (
      system: let
        pkgs = nixpkgs.legacyPackages.${system};
      in {
        checks = {
          pre-commit-check = pre-commit-hooks.lib.${system}.run {
            src = ./.;
            hooks = {
              alejandra.enable = true;
              nix-linter.enable = true;
              prettier = {
                enable = true;
                excludes = ["package-lock.json"];
              };
              eslint = {
                enable = true;
                excludes = ["package-lock.json" ".github/renovate.json" "tsconfig.json"];
              };
            };
            settings = {
              eslint = {
                extensions = "\\.(js|jsx|ts|tsx|json)$";
              };
            };
          };
        };

        devShell = pkgs.mkShell {
          buildInputs = with pkgs; [
            nodejs
          ];
          shellHook = ''
            export PATH="$PWD/node_modules/.bin:$PATH"
            ${(self.checks.${system}).pre-commit-check.shellHook}
          '';
        };
      }
    );
}
