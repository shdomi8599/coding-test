SELECT 
C.AUTHOR_ID,
C.AUTHOR_NAME,
C.CATEGORY,
SUM(C.PRICE * D.SALES) AS TOTAL_SALES
FROM (
SELECT 
A.BOOK_ID,
A.CATEGORY,
A.AUTHOR_ID,
A.PRICE,
B.AUTHOR_NAME
FROM BOOK AS A
INNER JOIN AUTHOR AS B
ON A.AUTHOR_ID = B.AUTHOR_ID
) AS C
INNER JOIN (
SELECT *
FROM BOOK_SALES 
WHERE SALES_DATE LIKE '2022-01%'
) AS D
ON C.BOOK_ID = D.BOOK_ID
GROUP BY AUTHOR_NAME, CATEGORY
ORDER BY 1, 3 DESC