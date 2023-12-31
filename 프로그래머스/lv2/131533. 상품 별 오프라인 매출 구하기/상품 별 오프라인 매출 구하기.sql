SELECT P.PRODUCT_CODE,
SUM (P.PRICE * OS.SALES_AMOUNT) AS SALES
FROM PRODUCT AS P
INNER JOIN OFFLINE_SALE AS OS
ON P.PRODUCT_ID = OS.PRODUCT_ID
GROUP BY OS.PRODUCT_ID
ORDER BY 2 DESC,1