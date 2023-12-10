install:
    npm ci

brain-games:
    node bin/brain-games.js
    node bin/brain-calc.js

publish:
    npm publish --dry-run
