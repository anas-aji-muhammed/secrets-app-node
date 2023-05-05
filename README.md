## Level 1 - Mongoose security and .env files
<div align="justify">

This version of Node.js security project implements encryption of sensitive data using **Mongoose-encryption** and secure storage of sensitive information such as API keys and passwords using **.env files**. The project provides enhanced security for data at rest and in transit, reducing the risk of unauthorized access.
- **mongoose-encryption**: A Node.js library that provides easy-to-use encryption and decryption for Mongoose models, enabling you to store sensitive data securely in a MongoDB database.

- **.env files**: A configuration file format commonly used in Node.js projects that allows developers to define and manage environment variables, including sensitive data such as API keys and passwords. Using .env files helps to keep sensitive information out of your codebase and improves security by keeping your secrets separate from your code.
</div>
[Secret-App-V1-Mongoose-Encryption]: (https://github.com/anas-aji-muhammed/secrets-app-node/tree/v1-mongoose-ecryption-with-env-file)

## Level 2 - Hashing passwords with MD5 
<div align="justify">
In this version of the project I have used MD5 hashing to securely store user passwords in a MongoDB database. MD5 hashing is a widely-used cryptographic hash function that creates a fixed-length hash value from input data, making it ideal for password storage.

When a user creates an account or updates their password, their password is hashed using the MD5 algorithm before being stored in the database. When the user logs in, their password is hashed again and compared to the stored hash value to determine if the login is valid.

Using MD5 hashing provides an additional layer of security to the project by protecting user passwords from being stored in plaintext. It also helps to ensure that even if the database is compromised, user passwords remain secure.

**However, due to known security weaknesses in the algorithm, MD5 is no longer considered secure for cryptographic purposes and should not be used in new applications.**
</div>
[Secret-App-V2-MD5]: (https://github.com/anas-aji-muhammed/secrets-app-node/tree/v2-hashing)

## Level 3 - Bcrypt Hashing with salting rounds
<div align="justify">
In this version I have used bcrypt hashing with salt to securely store user passwords in a MongoDB database. Bcrypt is a popular password hashing algorithm that uses a configurable number of rounds to make the hashing process more time-consuming and therefore more resistant to brute-force attacks.

When a user creates an account or updates their password, their password is hashed using bcrypt with a randomly generated salt. The salt value is then stored alongside the hash value in the database. When the user logs in, their password is hashed again with the same salt value and compared to the stored hash value to determine if the login is valid.

Using bcrypt with salt provides a high level of security for user passwords by making it difficult for attackers to brute-force the hash value. The number of rounds used to hash the password can be adjusted to increase or decrease the time required for hashing, striking a balance between security and performance.

Compared to MD5, bcrypt with salt is much more secure for password storage because it is not susceptible to brute-force attacks. However, the additional security measures also result in a longer hashing time, which can impact application performance.
- Bcrypt: A password hashing algorithm that uses a variable number of rounds to create a salted hash value from an input password. Bcrypt is considered more secure than older hashing algorithms such as MD5 and SHA1 because it requires a large amount of time and computational power to generate the hash value, making it more difficult to crack.

- Salting: A technique used to add randomness to a password hash to make it more resistant to attacks. A salt value is generated randomly and then combined with the password before hashing to create a unique hash value for each password. This helps to prevent attackers from using precomputed hash tables to crack passwords.

- Salting rounds: The number of rounds of hashing applied to the password before it is stored in the database. The number of rounds can be adjusted to increase the time required to generate the hash value, making it more difficult for attackers to brute-force the password. However, increasing the number of rounds also increases the time required to hash each password, which can impact application performance.
</div>
[Secret-App-V3-Bcrypt]: (https://github.com/anas-aji-muhammed/secrets-app-node/tree/v3-bcrypt-salting)

