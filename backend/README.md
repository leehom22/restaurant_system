ENV:

1. -T&Rv73TxR3K?2x (Supabase project password)

Go to spring.start.io

Spring  setup package:

1. Spring Web
2. Spring Data JPA
3. Lombok 
4. Spring Boot DevTools

OR go to: spring-boot-starter-web (https://central.sonatype.com/artifact/org.springframework.boot/spring-boot-starter-web)

# Do not add dependencies version on pom.xml

# Run Spring on cmd 

1. go to the path 
2. mvnw spring-boot:run

localhost:8080

Project Structure 

my-spring-app/
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/
│   │   │       └── myapp/
│   │   │           ├── MyAppApplication.java    # Entry point
│   │   │           ├── controller/              # Like Express routes
│   │   │           ├── service/                 # Business logic
│   │   │           ├── repository/              # Database access
│   │   │           ├── model/                   # Entities (like Mongoose schemas)
│   │   │           ├── dto/                     # Data Transfer Objects
│   │   │           └── config/                  # Configuration classes
│   │   └── resources/
│   │       ├── application.properties           # Like .env
│   │       └── static/                          # Static files
│   └── test/
│       └── java/                                # Unit tests
├── pom.xml                                      # Like package.json (Maven)
└── target/                                      # Like dist/ or build/

com.myapp/
├── MyAppApplication.java              # Entry point
│
├── controller/                        # REST endpoints
│   ├── UserController.java
│   └── ProductController.java
│
├── service/                           # Business logic
│   ├── UserService.java
│   ├── ProductService.java
│   └── impl/
│       ├── UserServiceImpl.java
│       └── ProductServiceImpl.java
│
├── repository/                        # Data access
│   ├── UserRepository.java
│   └── ProductRepository.java
│
├── model/                             # Entities
│   ├── User.java
│   └── Product.java
│
├── dto/                               # Data Transfer Objects
│   ├── UserDTO.java
│   ├── CreateUserRequest.java
│   └── UserResponse.java
│
├── exception/                         # Custom exceptions
│   ├── ResourceNotFoundException.java
│   ├── DuplicateResourceException.java
│   └── GlobalExceptionHandler.java
│
├── config/                            # Configuration
│   ├── SecurityConfig.java
│   ├── WebConfig.java
│   └── DatabaseConfig.java
│
└── util/                              # Utility classes
    ├── JwtUtil.java
    └── DateUtil.java
    
# Key Annotations

@Component      // Generic Spring-managed bean
@Service        // Service layer (business logic)
@Repository     // Data access layer
@Controller     // Web controller (returns views)
@RestController // REST API controller (returns JSON)
@Configuration  // Configuration class

# HTTPMethod Annotation
@GetMapping      // GET requests
@PostMapping     // POST requests
@PutMapping      // PUT requests
@DeleteMapping   // DELETE requests
@PatchMapping    // PATCH requests

# Key JPA Annotations
@Entity                    // Marks class as database entity
@Table(name = "users")     // Table name (optional, defaults to class name)
@Id                        // Primary key
@GeneratedValue            // Auto-increment
@Column                    // Column configuration
@Temporal                  // Date/time fields
@Transient                 // Field not persisted to database
@CreatedDate               // Auto-set creation timestamp
@UpdatedDate               // Auto-set update timestamp