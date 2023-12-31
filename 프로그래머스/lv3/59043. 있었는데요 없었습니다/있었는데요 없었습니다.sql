SELECT I.ANIMAL_ID, I.NAME
FROM ANIMAL_INS AS I
INNER JOIN ANIMAL_OUTS AS O
ON I.ANIMAL_ID = O.ANIMAL_ID
WHERE TIMESTAMPDIFF(SECOND,O.DATETIME, I.DATETIME) > 0
ORDER BY I.DATETIME