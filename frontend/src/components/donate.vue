<template>
    <div class="container mx-auto mt-12">
      <h1 class="text-3xl text-center mb-4">Support Our Cause</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img src="@/assets/Donate-Action.jpeg" alt="Donate Image" class="w-full rounded-lg shadow-md">
        </div>
        <div class="flex flex-col justify-center">
          <p class="mb-4 text-lg">
            Your support makes a difference! By donating, you are contributing to our efforts to improve and grow our organization. Every contribution matters and helps us achieve our goals.
          </p>
          <p class="mb-4 text-lg">
            With your help, we can continue to provide valuable services to our community and pursue our mission of making a positive impact.
          </p>
          <p class="mb-4 text-lg">
            Click the button below to make a donation through PayPal and be a part of our journey towards a better future.
          </p>
          <a href="https://www.paypal.com/donate" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
            Donate via PayPal
          </a>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
  .btn-primary {
    background-color: #007bff;
    color: #fff;
    padding: 10px 20px;
    border-radius: 4px;
    text-decoration: none;
    display: inline-block;
    transition: background-color 0.3s;
  }
  
  .btn-primary:hover {
    background-color: #0056b3;
  }
  </style>
  