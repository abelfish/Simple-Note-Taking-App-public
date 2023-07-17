import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer
      class=" fixed bottom-0 w-full p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-3 dark:bg-gray-800"
    >
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400"
        >© 2023 <a href="" class="hover:underline">Perfect Note Taker</a>. All
        Rights Reserved.
      </span>
      <ul
        class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0"
      >
        <li>
          <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
        </li>

        <li>
          <a href="#" class="hover:underline">Contact</a>
        </li>
      </ul>
    </footer>
  `,
  styles: [],
})
export class FooterComponent {}
