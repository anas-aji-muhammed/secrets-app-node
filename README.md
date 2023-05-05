## Level 1 - Mongoose security and .env files
<div align="justify">

This version of Node.js security project implements encryption of sensitive data using **Mongoose-encryption** and secure storage of sensitive information such as API keys and passwords using **.env files**. The project provides enhanced security for data at rest and in transit, reducing the risk of unauthorized access.
- **mongoose-encryption**: A Node.js library that provides easy-to-use encryption and decryption for Mongoose models, enabling you to store sensitive data securely in a MongoDB database.

- **.env files**: A configuration file format commonly used in Node.js projects that allows developers to define and manage environment variables, including sensitive data such as API keys and passwords. Using .env files helps to keep sensitive information out of your codebase and improves security by keeping your secrets separate from your code.
</div>
[Secret-App-V1]: (https://github.com/anas-aji-muhammed/secrets-app-node/tree/v1-mongoose-ecryption-with-env-file)
## Level 2 - Hashing passwords with MD5 
<div align="justify">
In this version of the project I have used MD5 hashing to securely store user passwords in a MongoDB database. MD5 hashing is a widely-used cryptographic hash function that creates a fixed-length hash value from input data, making it ideal for password storage.

When a user creates an account or updates their password, their password is hashed using the MD5 algorithm before being stored in the database. When the user logs in, their password is hashed again and compared to the stored hash value to determine if the login is valid.

Using MD5 hashing provides an additional layer of security to the project by protecting user passwords from being stored in plaintext. It also helps to ensure that even if the database is compromised, user passwords remain secure.

**However, due to known security weaknesses in the algorithm, MD5 is no longer considered secure for cryptographic purposes and should not be used in new applications.**
</div>
[Secret-App-V2]: (https://github.com/anas-aji-muhammed/secrets-app-node/tree/v2-hashing)