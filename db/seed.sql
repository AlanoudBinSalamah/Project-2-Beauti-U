
DROP DATABASE IF EXISTS beauti_u;
CREATE DATABASE beauti_u;

\c beauti_u

CREATE TABLE artist_stylist(

    id SERIAL PRIMARY KEY,
    nameOfArtist VARCHAR,
    typeOfArtist VARCHAR ,
    phoneNumber VARCHAR(10),
    email VARCHAR,
    city VARCHAR
    
);

INSERT INTO artist_stylist (nameOfArtist, typeOfArtist, phoneNumber, email, city) VALUES
    ('Waad Alturki,', 'Make-up Artist', '0543735382', 'waadmakeup@gmail.com', 'Riyadh'),
    ('Amal Alammar', 'Make-up Artist', '0504179628', 'amalmakeup8@gmail.com', 'Riyadh'),
    ('Yara Alnamlah', 'Make-up Artist', '0556425033', 'yara.makeup5@gmail.com', 'Riyadh'),
    ('Alanoud Almousa', 'Make-up Artist' , '055833539', 'beautybyalanoud@gmail.com', 'Riyadh' ),
    ('Lyan Altuwaijri', 'Make-up Artist', '0560500688', 'lyanmakeup@gmail.com', 'Riyadh'),
    ('Amal Alsuhaim', 'Hair Stylist', '0591356970', 'amal_hair@hotmail.com', 'Riyadh'),
    ('Reema Alsaad', 'Hair Stylist', '0559753979', 'reemaalsaad@gmail.com', 'Riyadh'),
    ('Auosh Mohammed', 'Hair Stylist', '0551351664', 'Auosh.2017@gmail.com', 'Riyadh'),
    ('Khuloud Alnoairy', 'Hair Stylist', '0508322179', 'khuloud.hair@gmail.com', 'Riyadh');


CREATE TABLE customers
(
    id SERIAL PRIMARY KEY,
    first_name VARCHAR,
    middle_name VARCHAR,
    last_name VARCHAR,
    phoneNumber VARCHAR(10),
    email VARCHAR UNIQUE NOT NULL
);

INSERT INTO customers (first_name, middle_name, last_name, phoneNumber, email)
VALUES ('Alanoud', 'Mohammed', 'Bin Salamah', '0563748888', 'ehkwhd@dkjf');

CREATE TABLE appointments
(
    id SERIAL PRIMARY KEY,
    customer_id INT NOT NULL,
    FOREIGN KEY (customer_id) REFERENCES customers,
    artist_id INT NOT NULL,
    FOREIGN KEY (artist_id)REFERENCES artist_stylist,
    appointmentDte TIMESTAMP
);

INSERT INTO appointments(customer_id, artist_id, appointmentDte)VALUES(1, 1,'1999-01-08 04:05:06');