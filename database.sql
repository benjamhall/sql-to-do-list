CREATE TABLE "tasks" (
	"id" SERIAL PRIMARY KEY,
	"item" VARCHAR(200) NOT NULL,
	"completed" BOOLEAN DEFAULT FALSE
	);
	
INSERT INTO "tasks" ( "item", "completed") VALUES ('Get Engaged this weekend', true), ('Finish weekend challenge', false);