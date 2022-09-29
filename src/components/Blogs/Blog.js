import React from 'react';

const Blog = () => {
    return (
      <div className="mt-10">
        <h1 className="text-5xl font-bold">Blogs</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-3">
          <div className="rounded-lg p-5 shadow-lg glass">
            <h1 className="text-2xl font-semibold">
              What is React and how its work?
            </h1>
            <p>
              React is a declarative, efficient, and flexible JavaScript library
              for building user interfaces. 'V' denotes the view in MVC. ReactJS
              is an open-source, component-based front end library responsible
              only for the view layer of the application. It is maintained by
              Facebook.
            </p>
          </div>

          <div className="rounded-lg p-5 shadow-lg glass">
            <h1 className="text-2xl font-semibold">
              What are the differences between props and state?
            </h1>
            <p>
              Props are used to pass data from one component to another. The
              state is a local data storage that is local to the component only
              and cannot be passed to other components.
            </p>
          </div>

          <div className="rounded-lg p-5 shadow-lg glass">
            <h1 className="text-2xl font-semibold">
              What does useEffect do except data fetch?
            </h1>
            <p>
              The useEffect Hook allows you to perform side effects in your
              components. Some examples of side effects are:
              directly updating the DOM, and timers. useEffect accepts two
              arguments. The second argument is optional.
            </p>
          </div>
        </div>
      </div>
    );
};

export default Blog;