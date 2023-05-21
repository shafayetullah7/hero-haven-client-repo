import AOS from 'aos';
import 'aos/dist/aos.css';

const Blog = () => {
    AOS.init();

    return (
        <div className="md:px-24 text-charcoal">
            <h1 className="text-6xl font-bold text-center tracking-wider">Blogs</h1>
            <div className="mt-16 border-2 border-ruby-500 rounded-xl"
             data-aos="zoom-in"
             data-aos-offset="0"
             data-aos-delay="10"
             data-aos-duration="500"
             data-aos-easing="ease-in-out"
             data-aos-mirror="true"
             data-aos-once="false"
             data-aos-anchor-placement="top-center"
            >
                <h1 className="text-xl font-bold bg-ruby-500 text-white p-3">What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
                <div className="p-3 text-justify">
                    <p className="indent-5 mt-1">Access token is a kind of user credential that represents the authorization that is granted to a user after user sign-in/sign-up to the application. Using this access token our application can understand if a user is valid to acccess some resources and also how much a user should be able to access.An access token has a short validity period. After that user cannot access protected properties of the application.</p>
                    <p className="indent-5 mt-1">A refresh token is also given to the user after logging in to the system. It has a longer lifespan compared to the access token. It is used when access token expires to ask backend to provide a new access token.</p>
                    <p className="indent-5 mt-1">These tokens can be stored in Localstorage or as a HTTP-only cookie. Storing these as HTTP-only cookie is somewhat secure as compared to storing in Localstorage.</p>
                </div>
            </div>
            <div className="mt-5 border-2 border-ruby-500 rounded-xl"
             data-aos="zoom-in"
             data-aos-offset="0"
             data-aos-delay="10"
             data-aos-duration="500"
             data-aos-easing="ease-in-out"
             data-aos-mirror="true"
             data-aos-once="false"
             data-aos-anchor-placement="top-center"
            >
                <h1 className="text-xl font-bold bg-ruby-500 text-white p-3">Compare SQL and NoSQL databases?</h1>
                <div className="p-3 text-justify">
                    <p className="indent-5 mt-1">SQL is a schema based database where data is stored in a table like manner. It uses multiple tables to store different kind of data to maximize memory efficiency and maintains relations among these tables through some common field. In SQL these relations are used to query desired data. As it is schema based database, its structure is predifined which ensures a good memory efficiency but often causes difficulties in an attempt to expand the fields and scope of the database.</p>
                    <p className="indent-5 mt-1">NoSQL databases use various data models, such as key-value, document, columnar, or graph, offering more flexibility in handling unstructured and semi-structured data. This kind of database does not depend on schema which allows it to expand dynamically.</p>
                    <p className="indent-5 mt-1">While SQL database is difficult to expand it provides a wider range of query capability as compared to NoSQL databases. Whereas NoSQL provides horizontal scalability which is difficult with SQL database.</p>
                </div>
            </div>
            <div className="mt-5 border-2 border-ruby-500 rounded-xl"
             data-aos="zoom-in"
             data-aos-offset="0"
             data-aos-delay="10"
             data-aos-duration="500"
             data-aos-easing="ease-in-out"
             data-aos-mirror="true"
             data-aos-once="false"
             data-aos-anchor-placement="top-center"
            >
                <h1 className="text-xl font-bold bg-ruby-500 text-white p-3">What is express js? What is Next JS</h1>
                <div className="p-3 text-justify">
                    <p className="indent-5 mt-1">Express.js is a web application framework for Node.js. It provides a simple and minimalist approach to build web applications and APIs. It allows developers to create server-side applications using JavaScript, using Node.js runtime.</p>
                    <p className="indent-5 mt-1">Nest.js is a TypeScript-based web application framework built on top of Express.js. It is designed for building efficient, scalable, and maintainable server-side applications. Nest.js leverages TypeScript's features to provide a structured and organized approach to application development.</p>
                    <p className="indent-5 mt-1">Nest.js aims to provide a scalable and maintainable architecture while leveraging the benefits of Express.js and TypeScript.</p>
                </div>
            </div>
            <div className="mt-5 border-2 border-ruby-500 rounded-xl"
             data-aos="zoom-in"
             data-aos-offset="0"
             data-aos-delay="10"
             data-aos-duration="500"
             data-aos-easing="ease-in-out"
             data-aos-mirror="true"
             data-aos-once="false"
             data-aos-anchor-placement="top-center"
            >
                <h1 className="text-xl font-bold bg-ruby-500 text-white p-3">What is MongoDB aggregate and how does it work?</h1>
                <div className="p-3 text-justify">
                    <p className="indent-5 mt-1">MongoDB's aggregation framework is a powerful feature that allows for advanced data processing and analysis within the database. It provides a flexible way to perform complex queries, transformations, and aggregations on MongoDB collections.</p>
                    <p className="indent-5 mt-1">The aggregation framework is used to process and transform documents in a collection, combining multiple stages of operations to produce the desired result. It follows a sequencial pattern where data flows through a sequence of stages, where each stage performs a specific operation on the input data and passing the results to the next stage.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;