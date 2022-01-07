# Archive of the World

**Archive of the World** is trying to fill the gap between online encyclopedias and image searching tools. The ultimate goal is to have an archive of categories with the focus on the visual. <br>
[More following soon...]

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.1.

---
## Structure

Label | Description
-|-
__*__ | To do <br>
__:r__ | Routing <br>
__*:r__ | To do: Routing <br>
<u>abc</u> | Done

### App structure
- Header
  - Menu
    - (Signup) _*_ / _*:r_
    - Log(in / out) _*_ / _*:r_
    - (User profile) _*_ / _*:r_
      - User info _*_ / _*:r_
      - Favorites _*_ / _*:r_
      - Saved _*_ / _*:r_
    - About _*_ / _r_
- <u>Categories</u> _:r_
  - <u>Discover</u> _:r_
    - <u>Header</u> _:r_
    - Subheader _*:r_
    - Year Picker _*_ / _*:r_
    - Filters _*_
    - Grid Toggle _*_
    - Items Grid _*:r_
      - <u>Visual</u>
      - Favorite Toggle _*_
  - Search _r_
    - Item of the Day _*_
    - Grid Toggle _*_
    - Items Grid
      - Visual (Missing _*_)
      - Favorite button _*_
- Footer

### Routing structure
/ <br>
/signup <br>
/login <br>
/[category]/search&value=[searchValue] <br>
/[category]/discover/[xx]/[xxx]/[xxxx]/[xxxxx]/[xxxxxx]&year=[yearPicked] <br>
/profile/[username]

---
## NPM commands

### Development server

Run `npm start` for the dev server. Navigate to `http://localhost:4200/`.

### Build

Run `npm build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Running unit tests

Run `npm run test` to execute the unit tests via Karma with a headless browser.

### Running end-to-end tests

Run `npm run cypress` to execute the end-to-end tests via Cypress.