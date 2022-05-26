import React from 'react';

const Blogs = () => {
    return (
        <div className='container min-h-screen'>

            <h3 className='text-center text-2xl uppercase font-bold text-primary m-10'>Questions / Answer </h3>

            <div className='grid grid-cols-1 gap-5'>
                <div tabindex="0" className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        How will you improve the performance of a React Application?
                    </div>
                    <div className="collapse-content">
                        <p className='text-xl font-bold mb-5 text-slate-900'>Here the features and tricks that will help you optimize react apps performance.</p>
                        <p>
                            <ul>
                                <li>
                                    <strong>1. useMemo()</strong> : This is a React hook that is used to cache functions in React, CPU-expensive functions.

                                </li>

                                <li>
                                    <strong>2. React PureComponent:</strong> React PureComponent is a base component class that checks the fields of state and props to know whether the component should be updated.
                                </li>
                                <li>
                                    <strong>3. Caching functions: </strong>Functions can be called in the React component JSX in the render method. If the functions get expensive, ie it takes long to execute it will hang the rest of the re-render code to finish thereby hampering the user's experience.
                                </li>
                                <li>
                                    <strong>4. Conditional rendering of the components: </strong> Commonly, we write down components that get rendered when clicked or any other event e.g. Modals or Dropdowns. We identified that a lot of these components are rendered when they are not needed. These were big components with many child components and API calls associated with them. We avoided rendering these components until they are needed.
                                </li>
                                <li>
                                    <strong>5. Lazy loading: </strong> React.lazy is a new feature added to React when Reactv16.6 was released, it offered an easy and straight-forward approach to lazy-loading and code-splitting our React components.
                                </li>
                                <li>
                                    <strong>6. Remove all Inline Functions: </strong> An inline function is a function that is defined and passed down inside the render method of a React component. Move all inline functions outside the render() such that it does not get redefined on every render cycle.
                                </li>
                            </ul>
                        </p>
                    </div>
                </div>

                <div tabindex="2" className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        What are the different ways to manage a state in a React application?
                    </div>
                    <div className="collapse-content">
                        <p className='text-xl font-bold'>The Four Kinds of React State to Manage</p>
                        <br />
                        <p>
                            1. Local state <br />
                            2. Global state <br />
                            3. Server state <br />
                            4. URL state</p>
                        <p>
                            <br />
                            <ul>
                                <li>
                                    <strong>Local (UI) state:</strong>  Local state is data we manage in one or another component. Local state is most often managed in React using the useState hook.
                                </li>
                                <li>
                                    <strong>Global (UI) state:</strong> Global state is data we manage across multiple components.
                                    Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.
                                </li>
                                <li>
                                    <strong> Server state:</strong>  Data that comes from an external server that must be integrated with our UI state. Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state. There are several pieces of state that must be managed every time you fetch or update data from an external server, including loading and error state.
                                </li>
                                <li>
                                    <strong>URL state:</strong> Data that exists on our URLs, including the pathname and query parameters.
                                    URL state is often missing as a category of state, but it is an important one. In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL!
                                </li>
                            </ul>
                        </p>
                    </div>
                </div>

                <div tabindex="3" className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        How does prototypical inheritance work?
                    </div>
                    <div className="collapse-content">
                        <p>JavaScript is an Object Oriented programming language based on prototypes. JavaScript now supports "prototypal inheritance," which means that objects and methods can be shared, extended, and copied after the ES6 modifications. We frequently desire to extend something in programming. For instance, we have a user object with its properties and methods, and want to make admin and guest as slightly modified variants of it. We'd like to reuse what we have in user, not copy/reimplement its methods, just build a new object on top of it. Prototypal inheritance is a language feature that helps in that.</p> <br />
                        <p>
                            ▶ In JavaScript, all objects have a hidden [[Prototype]] property that's either another object or null. <br />
                            ▶ We can use obj.__proto__ to access it <br />
                            ▶ The object referenced by [[Prototype]] is called a “prototype”. <br />
                            ▶ If we want to read a property of obj or call a method, and it doesn't exist, then JavaScript tries to find it in the prototype. <br />
                            ▶ The for..in loop iterates over both its own and its inherited properties. All other key/value-getting methods only operate on the object itself.
                        </p>
                    </div>
                </div>

                <div tabindex="4" className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        Why should we not update the state directly?
                    </div>
                    <div className="collapse-content">
                        <p className='text-xl font-bold '>One should never update the state directly because of the following reasons:</p>
                        <br />
                        <ul>
                            <li>
                                〉 If we update it directly, calling the setState() afterward may just replace the update you made.
                            </li>
                            <li>
                                〉 When we directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value.
                            </li>
                            <li>
                                〉 You will lose control of the state across all components.
                            </li>
                        </ul>
                    </div>
                </div>

                <div tabindex="5" className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        What is a unit test? Why should write unit tests?
                    </div>
                    <div className="collapse-content">
                        <p> <strong>Unit Test:</strong>  </p>
                        <p>
                            Unit testing is a type of testing that examines a single software unit in isolation. This entails checking a function's or component's output for a given input. This could imply testing that the component renders successfully for the supplied props for React components.
                        </p>
                        <br />
                        <p><strong>Why should write: </strong> There are multiple reasons why unit tests can be helpful. Some of them being:</p>
                        <br />
                        <ul>
                            <li>
                                1. Prevent regressions <br />
                                2. Exercise your code <br />
                                3. Faster feedback while developing
                            </li>
                            <br />
                            <p>
                                If you write your tests as you build a feature, or even before, it gives you a better idea of what it needs to do. You end up writing code that is easy to test, has few dependencies, and is easy to understand.
                            </p>
                            <p>
                                The only purpose of unit tests is the way you go about writing your code — it has prevented us from shipping bugs to production on several occasions.
                                Unit tests help you with all the points I mentioned above. They lay the foundation of every solid testing suite for a good reason.
                            </p>
                        </ul>

                    </div>
                </div>

            </div>



        </div>
    );
};

export default Blogs;