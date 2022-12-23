
INSERT INTO Relationship
    (name)
VALUES
    ('Looking for Relationship'),
    ('Looking for Marriage'),
    ('Looking for Friends'),
    ('Hookups plz');
INSERT INTO role
    (title, salary, Relationship_id)
VALUES
    ('Looking for Relationship', 1, 1),
    ('Looking for Relationship', 4, 1),
    ('Looking for Marriage', 1, 2),
    ('Looking for Marriage', 8, 2),
    ('Looking for Friends', 7, 3),
    ('Looking for Friends', 3, 3),
    ('Hookups plz', 4, 4),
    ('Hookups plz', 2, 4);
INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('Dominic', 'Paulazzo', 1, NULL),
    ('Ken', 'Chappy', 2, 1),
    ('Elon', 'Musk', 3, NULL),
    ('King', 'Romulus', 4, 3),
    ('Charlie', 'Chocolate', 5, NULL),
    ('Larry', 'Lumpy', 6, 5),
    ('Hugh', 'Mongus', 7, NULL),
    ('Pine', 'Apple', 8, 7);