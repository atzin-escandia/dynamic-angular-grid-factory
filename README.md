# Dynamic Angular Factory List/Grid 🧮:

Create dynamic lists or grids easily using Angular's dynamic factory approach, allowing you to customize and present collections of items in a versatile way. 🎉

## Features :sparkles:

- **Dynamic Creation:** Generate lists or grids with ease, adapting to your content and design needs.

- **Infinite Components:** Items can be dynamically loaded as the data provided.

- **Fully Customizable:** Customize the appearance, behavior, and content of each list/grid to suit your application's requirements.

## Desktop View :desktop_computer:

![image](https://github.com/atzin-escandia/dynamic-angular-grid-factory/assets/77510953/9cfdf140-d5b7-44d2-b4c3-3675b0e205fe)

## Installation :computer:

1. Clone this repository:

   ```bash
   git clone https://github.com/atzin-escandia/dynamic-angular-grid-factory.git
   ```

2. Navigate to the project directory:

   ```bash
   cd infinite-angular-grid-factory
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   ng serve
   ```

5. Open your browser and go to `http://localhost:4200` to see the dynamic lists/grids in action!

## Usage :rocket:

1. Define the dynamic content for your list/grid from your declaration component:

   ```typescript
   data = [
     {
       title: "Discover the beauty of nature",
       buttonName: "Explore",
       image:
         "https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
     },
     {
       title: "Tips for embracing natural beauty",
       buttonName: "See tips",
       image:
         "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
     },
     {
       title: "The wonders of nature-inspired wellness",
       buttonName: "Explore",
       image:
         "https://images.unsplash.com/photo-1446329813274-7c9036bd9a1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
     },
   ];
   ```

2. Utilize the dynamic factory approach to create your list/grid components in your template:

   ```html
   <app-dynamic-angular-grid-factory
     [data]="data"
     (eventDataEmitter)="handleEventData($event)"
     [styles]="['border-style', 'bg-black']"
     [component]="component"
   >
   </app-dynamic-angular-grid-factory>
   ```

3. Provide an array of `data` objects to populate your dynamic list/grid. Each object should include properties such as title, buttonName, image, etc.

---

## Contributing :hammer_and_wrench:

Contributions are welcome! If you encounter any issues or have ideas for enhancements, please open an issue or submit a pull request.

Love this Dynamic Grid? 🌱 &nbsp;
<a href="https://github.com/atzin-escandia" target="_blank" rel="noopener">
Consider giving the repository a star.✨
</a>
