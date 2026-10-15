<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- The migrated PJDex landing page lives as plain JSX in `src/site/` and is rendered by `src/routes/index.tsx`; keep browser-only reads (localStorage) inside effects so SSR hydrates cleanly.
- Keep hero breakpoint placement in the existing Hero/ HeroImageSlider Tailwind classes, with slider behavior regression tests in `src/test`, so mobile changes do not alter tablet or desktop layouts.
