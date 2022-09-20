
CREATE TABLE IF NOT EXISTS users
(
  id bigserial PRIMARY KEY,
  username text NOT NULL,
  mail text NOT NULL,
  pass text NOT NULL
);
