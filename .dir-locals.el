((typescript-mode
  . (
     ;; Enable typescript-language-server and eslint LSP clients.
     (lsp-enabled-clients . (ts-ls eslint))
     (eval . (lexical-let ((project-directory (car (dir-locals-find-file default-directory))))
               (set (make-local-variable 'flycheck-javascript-eslint-executable)
                    (concat project-directory ".yarn/sdks/eslint/bin/eslint.js"))

               (eval-after-load 'lsp-clients
                 '(progn
                    (plist-put lsp-deps-providers
                               :local (list :path (lambda (path) (concat project-directory ".yarn/sdks/" path))))))

               (lsp-dependency 'typescript-language-server
                               '(:local "typescript-language-server/lib/cli.js"))
               (lsp-dependency 'typescript
                               '(:local "typescript/bin/tsserver"))

               ;; Re-(start) LSP to pick up the dependency changes above. Or use
               ;; `hack-local-variables-hook` as proposed in lsp-mode's FAQ:
               ;; https://emacs-lsp.github.io/lsp-mode/page/faq/
               ;; (lsp)
               )))))