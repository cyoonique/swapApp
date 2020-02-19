CREATE TABLE "user" (
	"id" serial NOT NULL,
	"user_name" varchar(255) NOT NULL UNIQUE,
	"password" varchar(255) NOT NULL,
	"location" varchar(255) NOT NULL,
	"email" varchar(255) NOT NULL UNIQUE,
	"created_at" TIMESTAMP NOT NULL,
	"last_login" TIMESTAMP NOT NULL,
	CONSTRAINT "user_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "item" (
	"item_id" serial NOT NULL,
	"description" varchar(500) NOT NULL,
	"category" varchar(255) NOT NULL,
	"est_value" integer NOT NULL,
	"condition" varchar(255) NOT NULL,
	"available" BOOLEAN NOT NULL,
	"sold_time" TIMESTAMP NOT NULL,
	"item_name" varchar(255) NOT NULL,
	CONSTRAINT "item_pk" PRIMARY KEY ("item_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "history" (
	"history_id" serial NOT NULL,
	"item_id" integer NOT NULL,
	"sold_user_id" integer NOT NULL,
	"received_user_id" integer NOT NULL,
	CONSTRAINT "history_pk" PRIMARY KEY ("history_id")
) WITH (
  OIDS=FALSE
);





ALTER TABLE "history" ADD CONSTRAINT "history_fk0" FOREIGN KEY ("item_id") REFERENCES "item"("item_id");
ALTER TABLE "history" ADD CONSTRAINT "history_fk1" FOREIGN KEY ("sold_user_id") REFERENCES "user"("id");
ALTER TABLE "history" ADD CONSTRAINT "history_fk2" FOREIGN KEY ("received_user_id") REFERENCES "user"("id");

