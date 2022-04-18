import React from 'react';

const Blogs = () => {
    return (
      <div className="w-75 mx-auto my-5 shadow p-4">
        <h2>#1- Authentication vs Authorization</h2>
        <p>
          Authentication হলো যখন কোন website user login করতে চাই সেই user
          website এর valid কোন user কি না তা যাচাই করে login করতে দেয় । যেমন ঃ
          userName or Email and password যদি ঠিক তাহলে login করতে দেয় অন্যথা
          লগিন করতে দেয় না । মোটকথা security মূলক কাজ গুলো authentication করে থাকে। {" "}
        </p>
        <p>
          Authorization হলো user যখন লগিন করে তখন website এর কোন কোন জিনিসের
          ব্যবহার করার অনুমতি পাবে ্সেটা authorize করে । কোনটা সাধারণ user,
          কোনটা admin , কোনটা modaretor এবং কে কোনটা function access করতে পারবে
          সেই কাজ গুলো করে থাকে authorization । {" "}
        </p>
        <br />

        <h2>
          #2- Why are you using firebase? What other options do you have to
          implement authentication?
        </h2>
        <p>
          Firebase শুধু authenticatin এর জন্য না অনেক উদ্দেশ্যে ব্যবহার করা যায়
          । যা মাধ্যমে আমাদের website , apps গুলোকে develop , বৃদ্ধি এবং এটিকে
          মান সম্পন্ন করা যায় । তাছাড়া, ফায়ারবেস একটি ডেভেলপারদেরকে মাথায়
          রেখে তৈরি করা হয়েছে যাতে তারা একটি website তৈরি করার সময় যে সমস্ত
          সমস্যার সম্মুখীন হতে পারে তার সমাধান করতে পারে।
        </p>
        <p>
          Firebase ছাড়াও authentication implement এর জন্য কয়েকটি options এর নাম
          দেওয়া হলো ঃ{" "}
        </p>
        <ol>
          <li>NativeScript</li>
          <li>Back4App</li>
          <li>AWS Amplify</li>
          <li> Kuzzle</li>
          <li>Couchbase</li>
        </ol>
        <br />

        <h2>
          #3- What other services does firebase provide other than
          authentication?
        </h2>
        <p>Firebase Authentication ছাড়াও যে সকল service provide করে তা হলো ঃ</p>
        <ul>
          <li>Cloud Firestore.</li>
          <li>Cloud Functions.</li>
          <li>Firebase Hosting.</li>
          <li>Firebase Realtime Database.</li>
          <li>Cloud Storage.</li>
          <li>Google Analytics.</li>
          <li>Cloud Messaging.</li>
          <li>Predictions.</li>
          <li>Dynamic Links</li>
          <li>Remote Config</li>
        </ul>
      </div>
    );
};

export default Blogs;