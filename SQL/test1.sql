SELECT t.name
FROM manga m
	INNER JOIN manga_type mt ON m.id_manga = mt.id_manga 
    INNER JOIN type t ON mt.id_type = t.id_type
WHERE m.id_manga = 1