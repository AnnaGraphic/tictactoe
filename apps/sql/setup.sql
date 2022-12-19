DROP TABLE IF EXISTS games; 

CREATE TABLE games (
    id SERIAL PRIMARY KEY,
    user_x VARCHAR(255),
    user_x_avatar VARCHAR(255)
    user_x_game INTEGER,
    -- 1, 2, 3 | win lose tie
    user_o VARCHAR(255),
    user_o_avatar VARCHAR(255)
    user_o_game VARCHAR(1),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);