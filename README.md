# Discofy

## DEMO
![demo](https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/003/051/070/datas/original.gif)

## Inspiration
Leveraging Large Language Models (LLMs) to enhance music discovery and playlist curation by understanding user moods and preferences.

## What it does
Our team developed a backend FastAPI application featuring CRUD endpoints that connect to our MongoDB cluster to manage songs and playlists, among other operations. Additionally, we implemented an LLM chain that accepts parameters such as mood, energy level, and lyrical focus. This input is processed through a runnable LangChain consisting of two chains:

1. **Formatting and Song Retrieval Chain**: Formats the initial request and identifies relevant songs based on the user's criteria.
2. **External Search Chain**: Utilizes tools to search the internet for relevant YouTube and Spotify links.

All data is returned as a formatted JSON object. Initially, we encountered significant challenges in ensuring the chain properly utilized the tools and accurately passed data. Extensive prompt engineering was required to resolve these issues. Earlier iterations allowed users to send any message, making it difficult for the LLM to consistently find the correct links. By restructuring the input to be more structured and open-ended, the LLM was able to effectively use the tools and retrieve the appropriate links.

## How we built it
We built the application using the following technologies and methodologies:

- **Backend Framework**: FastAPI for high performance and ease of building RESTful APIs.
- **Database**: MongoDB for flexibility in handling JSON-like documents, ideal for managing songs and playlists.
- **LLM Integration**: LangChain to create robust LLM chains that handle user input and data retrieval.
- **Prompt Engineering**: Precise prompts to guide the LLM in processing user inputs and interacting with external tools effectively.
- **Tool Integration**: Tools for searching YouTube and Spotify to fetch relevant links based on user preferences.
- **OAuth Implementation**: Secure user authentication on the frontend application.
- **Component Refactoring**: Refactored the modal component to use a Shadcn dropdown for structured input (e.g., mood, lyrical focus), enhancing UI and input consistency.
- **JSON Formatting**: Ensured all responses are returned as structured JSON objects for consistency and frontend ease of use.

## Challenges we ran into
- **LLM Tool Utilization**: Ensuring the LLM effectively used integrated tools, leading to accurate link retrievals.
- **Data Passing Issues**: Debugging and adjusting prompts to ensure correct data passing between chains.
- **User Input Variability**: Managing variability in user messages to maintain consistency in link retrieval.
- **Prompt Engineering**: Iteratively refining prompts for efficiency and accuracy.
- **Integration Complexity**: Coordinating FastAPI, MongoDB, LangChain, and external tools seamlessly.
- **Cloud Integration**: Addressing latency and optimizing database connections in a cloud environment.
- **Database Schema Formation**: Balancing schema flexibility for new features with query performance.
- **Next.js Frontend Changes**: Implementing state management for complex LLM responses and restructuring the interface for structured inputs.

## Accomplishments that we're proud of
- Successfully built a scalable FastAPI backend with comprehensive CRUD operations connected to MongoDB.
- Developed a functional LLM chain that accurately processes user inputs and retrieves relevant music links.
- Solved complex tool utilization issues through advanced prompt engineering.
- Implemented a structured input system, improving LLM performance in link retrieval.
- Integrated YouTube and Spotify search tools effectively.
- Secured user authentication with OAuth implementation.
- Enhanced UI by refactoring modal components for structured inputs.
- Overcame performance challenges with cloud services to ensure seamless communication between components.

## What we learned
- **Prompt Engineering**: Crafting precise prompts is crucial for guiding LLMs to perform desired tasks accurately.
- **Structured Inputs Enhance Performance**: Structured inputs significantly improve the reliability of LLM outputs.
- **Integration Challenges**: Combining multiple technologies and tools requires careful planning and testing.
- **Cloud Service Optimization**: Migrating to cloud services requires optimization to prevent latency and resource bottlenecks.
- **Database Schema Design**: Designing scalable schemas requires balancing flexibility and performance.
- **State Management in Next.js**: Handling dynamic LLM responses in the frontend requires robust state management and expertise with React hooks.

## What's next for Discofy
- **Frontend Development**: Build a user-friendly interface to interact with backend services and display curated playlists.
- **Enhanced Personalization**: Incorporate more user-specific data to tailor music recommendations further.
- **Expanded Tool Integration**: Add support for additional music platforms and search tools.
- **Scalability Improvements**: Optimize backend and database for increased user load and data volume.
- **Advanced Analytics**: Implement analytics to gain insights into user preferences and system performance.
- **Continuous Prompt Optimization**: Refine prompts to improve the accuracy and relevance of LLM-generated outputs.
- **Feature Enhancements with MongoDB**: Leverage MongoDB's capabilities for new features.
- **Agent with Node Graphs (Future Implementation)**: Plan to implement an agent with node graphs utilizing multiple tools to enhance LLM navigation and information retrieval.
