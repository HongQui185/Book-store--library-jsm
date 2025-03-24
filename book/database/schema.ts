import { 
    varchar, 
    uuid, 
    integer, 
    text, 
    pgTable, 
    pgEnum, 
    timestamp 
  } from "drizzle-orm/pg-core"; 
  
  export const STATUS_ENUM = pgEnum("status", [   
    "PENDING",   
    "APPROVED",   
    "REJECTED"
  ]); 
  
  export const ROLE_ENUM = pgEnum("role", ["USER", "ADMIN"]); 
  
  export const BORROW_STATUS_ENUM = pgEnum("borrow_status", [   
    "PENDING",   
    "APPROVED",   
    "REJECTED",   
    "RETURNED"
  ]);  
  
  export const todo = pgTable("todo", {   
    id: uuid("id").notNull().primaryKey().defaultRandom(),   
    fullName: varchar("full_name", { length: 255 }).notNull(),   
    email: text("email").notNull().unique(),   
    universityId: integer("university_id").notNull(),   
    password: text("password").notNull(),   
    universityCard: text("university_card").notNull(),   
    status: STATUS_ENUM("status").default("PENDING"),   
    role: ROLE_ENUM("role").default("USER"),   
    lastActivityDate: timestamp("last_activity_date", { withTimezone: true }).defaultNow(), 
    createdAt: timestamp("created_at",  {
        withTimezone: true,
    }).defaultNow(),
  });
  