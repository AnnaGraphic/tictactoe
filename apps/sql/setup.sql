DROP TABLE IF EXISTS games; 

CREATE TABLE games (
    id SERIAL PRIMARY KEY,
    user_x VARCHAR(255),
    user_x_avatar VARCHAR(255),
    user_o VARCHAR(255),
    user_o_avatar VARCHAR(255),
    win VARCHAR(1),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);