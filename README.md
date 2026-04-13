# Enterprise Restaurant Management System (MVP)

A robust, full-stack web application designed to handle end-to-end restaurant operations, including online ordering, reservations, and a specialized "Limited Deals" engine. Built with a focus on scalable, enterprise-level architecture.

## Tech Stack

**Frontend:** React, TypeScript, Redux (State Management)
**Backend:** Java Spring Boot
**Database & Storage:** PostgreSQL (via Supabase)
**Planned Integrations:** Redis (Caching), BullMQ (Message Queues), GitHub Actions (CI/CD), Jest (Testing)

## Development Status

This project is currently in **Active Development**. The frontend UI components have been initialized, and the Spring Boot backend architecture is configured. Current development is focused on wiring up the core CRUD operations for menu and order management.

### Roadmap & Task Tracker

**Phase 1: Architecture & Initialization (Current)**
- [x] UI/UX component design and React initialization
- [x] Java Spring Boot framework setup and configuration
- [x] Project architecture and requirement planning

**Phase 2: Core Data & CRUD**
- [ ] Supabase (PostgreSQL) database schema implementation
- [ ] Core REST APIs (Menu retrieval, Cart management, Order submission)
- [ ] Manual Payment Verification workflows (Proof of payment upload)
- [ ] Reservation booking reference generation

**Phase 3: Multi-Role Dashboards**
- [ ] Admin Panel (Menu CRUD, Order approval/rollback, Banner management)
- [ ] Staff Portal (Order validation, UI dashboard)
- [ ] Customer order history and status tracking

**Phase 4: Advanced Enterprise Features**
- [ ] Limited Deals Engine (Scheduled inventory release, countdowns)
- [ ] Automated image compression and watermarking for payment proofs
- [ ] Implementation of Redis for caching menu items
- [ ] CI/CD pipeline setup via GitHub Actions

##  Core System Modules

* **Checkout & Guest Flow:** Streamlined guest checkout requiring payment proof upload, with manual admin verification.
* **Limited Deals Engine:** Scheduled promotional releases featuring pre-reveal countdowns and auto-hiding inventory logic.
* **Order Workflow & Inventory:** Transactional safety ensuring inventory is reserved upon order submission and rolled back if cancelled.
* **Payment Proof Processing:** Automated image compression and watermarking for administrative review.
* **Multi-Role Access:** Distinct interfaces and permissions for Customers, Counter Staff, and System Admins.

## Local Setup 

*(Instructions to be added upon completion of Phase 2)*