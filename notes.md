# Code Best Practices

## Factory Pattern
- Fits into the functional programming paradigm.
- Abstracts the complexity of object creation.

## N-Tier Architecture
- Used to divide system responsibilities.
    - Dependency Injection: We should not depend on concrete classes.
    - `rewrite` library: Simulates the database and returns a stub object.

## Abstract Factory
- Isomorphic JavaScript.
- Dynamic interfaces.
- Browser: `index.mjs` - dynamic factory.

## Template Method
The purpose of this pattern is to establish a sequence of methods to be executed, usually within an abstract class.

### Example: User Management
- Opens and closes connections every time a connection is needed, leading to duplicated code.

## Decorator Pattern
- Frequently used with NestJS. (U use often)
- Enhances code maintainability by adding behavior to existing methods (e.g., used in a history method).
- Acts as an interception layer.

- agent.js emit the interceptor for httpServer for module
    - substitute the way that works

- Not change globally the InjectHttoInterceptor

## Adapter TODO project
- Business case - a service that gonna emit "ticket" for all users (some tickets in banks are emitted differently)

- Unique signature (compatible for systems)

- 

([json for mock](https://gist.githubusercontent.com/ErickWendel/927970b8fa7117182413be100417607d/raw/d78adae11f5bdbff086827bf45f1bc649c339766/rick-and-morty-characters.json))
