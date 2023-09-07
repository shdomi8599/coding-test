-- 코드를 입력하세요
select count(*) from (select * from ANIMAL_INS where name is not null group by name) as a