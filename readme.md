# Tasklist backend

* Get postgresql up and running locally on 5432 port to mach `db.ts` file configuration
* Run `npm install` and `npm run dev`
* Running on port 3001
* Find below postman collection and database backup to restore database in case it's needed



## To create Database
```
CREATE TABLE tasks (
  task_id SERIAL PRIMARY KEY , 
  title VARCHAR (50) NOT NULL, 
  description VARCHAR (50) NOT NULL, 
  quantity INTEGER NOT NULL, 
  purchased BOOLEAN DEFAULT FALSE, 
  created_at TIMESTAMP NOT NULL DEFAULT now()
);

CREATE SEQUENCE public.tasks_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

```
### Helper files

[DB Backup link - Postman collection](hhttps://file.io/OzKet7MTU5c9)