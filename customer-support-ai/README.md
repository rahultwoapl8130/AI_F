# Multi-Agent Customer Support System

An AI-driven enterprise customer support application built with Next.js, FastAPI, and LangGraph. The system features specialized domain agents (Billing, Technical, Product, Complaint) managed by an intelligent orchestrator, utilizing RAG (Retrieval-Augmented Generation) for context-aware responses.

## Phase 1 Implementation

- **Project Structure**: Organized into `frontend/` and `backend/`.
- **Git Repository**: Initialized.
- **Dependencies**: Listed in `requirements.txt`.

## Getting Started

### Backend Setup
1. Navigate to the `backend/` directory (once created).
2. Install dependencies: `pip install -r ../requirements.txt`.
3. Set up your `.env` file with MongoDB and LLM API keys.

### Frontend Setup
1. Navigate to the `frontend/` directory (once created).
2. Install dependencies: `npm install`.
3. Start the Next.js development server: `npm run dev`.

## Knowledge Base
Add your company's PDF documents (e.g., FAQ, policies, manuals) to the `knowledge_base/` folder to populate the vector database.
