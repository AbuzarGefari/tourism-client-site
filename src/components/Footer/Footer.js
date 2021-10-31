import React from 'react';

const Footer = () => {
    return (
        
        <div>
           <footer class="text-gray-100 bg-gray-800">
    <div class="max-w-3xl mx-auto py-6">
        <h1 class="text-center text-lg lg:text-2xl">
            Join 31,000+ other and never miss <br /> 
            Thank you to visit our website
        </h1>

        <div class="flex justify-center mt-6">
            <div class="bg-white rounded-md">
                <div class="flex flex-wrap justify-between md:flex-row">
                    <input type="email" class="m-1 p-2 appearance-none text-gray-700 text-sm focus:outline-none focus:placeholder-transparent" placeholder="Enter your email" aria-label="Enter your email"/>
                    <button class="w-full m-1 p-2 text-sm bg-gray-800 rounded font-semibold uppercase lg:w-auto hover:bg-gray-700">subscribe</button>
                </div>
            </div>
        </div>

        <hr class="h-px mt-6 bg-gray-700 border-none"/>

        <div class="flex flex-col items-center justify-between mt-6 md:flex-row">
            <div>
                <a href="#" class="text-xl font-bold text-gray-100 hover:text-gray-400">Travell King</a>
            </div>

           
        </div>
    </div>
</footer>
        <div className="bg-dark">
          <p className="text-center text-white m-0 py-3">
            Copyright &copy; All Reserved |
            <a
              className="ms-1 text-primary text-decoration-none"
              href="https://www.facebook.com/abuzargefari.2"
            >
              Travell King
            </a>
          </p>
        </div>
      </div>
    );
  };

export default Footer;