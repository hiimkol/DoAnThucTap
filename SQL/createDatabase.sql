DROP DATABASE ComicDB
CREATE DATABASE ComicDB CHARACTER SET utf8 COLLATE utf8_general_ci;

CREATE TABLE `type` (
	`id_type` int NOT NULL AUTO_INCREMENT,
	`name` varchar(255) NOT NULL UNIQUE,
	PRIMARY KEY (`id_type`)
);

CREATE TABLE `manga` (
	`id_manga` int NOT NULL AUTO_INCREMENT,
	`name_manga` varchar(255) NOT NULL,
	`description` TEXT,
    `pre_image` varchar(255) NOT NULL,
	PRIMARY KEY (`id_manga`) 
);

CREATE TABLE `author` (
	`id_author` int NOT NULL AUTO_INCREMENT,
	`name` varchar(255) NOT NULL UNIQUE,
	PRIMARY KEY (`id_author`)
);

CREATE TABLE `manga_type` (
	`id_type` int NOT NULL,
	`id_manga` int NOT NULL,
	PRIMARY KEY (`id_type`,`id_manga`)
);

CREATE TABLE `manga_author` (
	`id_manga` int NOT NULL,
	`id_author` int NOT NULL,
	PRIMARY KEY (`id_manga`,`id_author`)
);

CREATE TABLE `chapter` (
	`id_chapter` int NOT NULL AUTO_INCREMENT,
    `name` varchar(255) NOT NULL,
	`id_manga` int NOT NULL,
	PRIMARY KEY (`id_chapter`)
);

CREATE TABLE `chapter_detail` (
	`id_chapter` int NOT NULL,
	`img` varchar(255) NOT NULL,
	PRIMARY KEY (`id_chapter`,`img`)
);

CREATE TABLE `reader` (
	`username` varchar(255) NOT NULL,
	`password` varchar(255) NOT NULL,
	`name` varchar(255) NOT NULL,
	`email` varchar(255) NOT NULL,
	PRIMARY KEY (`username`)
);

CREATE TABLE `reader_manga` (
	`username` varchar(255) NOT NULL,
	`id_manga` int NOT NULL,
	PRIMARY KEY (`username`,`id_manga`)
);

ALTER TABLE `manga_type` ADD CONSTRAINT `manga_type_fk0` FOREIGN KEY (`id_type`) REFERENCES `type`(`id_type`);

ALTER TABLE `manga_type` ADD CONSTRAINT `manga_type_fk1` FOREIGN KEY (`id_manga`) REFERENCES `manga`(`id_manga`);

ALTER TABLE `manga_author` ADD CONSTRAINT `manga_author_fk0` FOREIGN KEY (`id_manga`) REFERENCES `manga`(`id_manga`);

ALTER TABLE `manga_author` ADD CONSTRAINT `manga_author_fk1` FOREIGN KEY (`id_author`) REFERENCES `author`(`id_author`);

ALTER TABLE `chapter` ADD CONSTRAINT `chapter_fk0` FOREIGN KEY (`id_manga`) REFERENCES `manga`(`id_manga`);

ALTER TABLE `chapter_detail` ADD CONSTRAINT `chapter_detail_fk0` FOREIGN KEY (`id_chapter`) REFERENCES `chapter`(`id_chapter`);

ALTER TABLE `reader_manga` ADD CONSTRAINT `reader_manga_fk0` FOREIGN KEY (`username`) REFERENCES `reader`(`username`);

ALTER TABLE `reader_manga` ADD CONSTRAINT `reader_manga_fk1` FOREIGN KEY (`id_manga`) REFERENCES `manga`(`id_manga`);


INSERT INTO type(type.name)
VALUES('Action'),
('Comedy'),
('Shounen'),
('Drama'),
('Fantasy'),
('Adventure'),
('Sci-fi'),
('Slice of life'),
('Mystery'),
('Detective'),
('Supernatural'),
('Seinen');

INSERT INTO author(author.name)
VALUES('Kishimoto Masashi'),
('Fujiko F. Fujio'),
('Action');

INSERT INTO manga(manga.name_manga, manga.description, manga.pre_image)
VALUES('Naruto','Naruto là một cậu bé có mơ ước trở thành hokage của làng Konoha,được Hokage phong ấn trong người một trong 9 quái vật của thể giới : Cửu vĩ Hồ ly.Vì cho cậu là một con quái vật, ko ai dám chơi với cậu!& Vì muốn được thừa nhận nên rất phá phách.Khi tốt nghiệp trướng ninja, lần đầu tiên cậu đã được thừa nhận và có một người bạn thân là Sasuke.Hai năm sau, Sasuke đã rời bỏ làng lá để đi theo Orochimaru vì muốn đạt được sức mạnh hơn người, và dùng sức mạnh đó để giết người anh của mình.Naruto muốn đem Sasuke trở về, và vì Kakashi ko đủ trình độ nên đã đi theo Jiraiya - một trong tam nin truyền thuyết của Konoha - để học tập thêm cách dùng sức mạnh.Sau hai năm trờ về, Naruto đã 16 tuổi và có nhiều thay đổi! Và những khó khăn nguy hiểm cũng từ đó tăng lên
2 năm sau Sasuke đã trưởng thành...và đúng với cái tên thiên tài Uchiha cậu đã hạ được Orochimaru ( tất nhiên là lúc hắn đang bị ấn chú của Đệ tam làm yếu nhất ) và phong ấn hắn trong người cậu. Cậu cùng Suigetsu , Juugo và Karin thành lập Mãng xà truy tìm Itachi. Naruto Sakura Choiji Sai Ino Shikamaru Kiba Shino....cũng dần trở thành những ninja mạnh mẽ trụ cột của làng lá. Họ đã hạ được 2 thành viên Akatsuki. Cũng như Sasuke hạ được Deidara
Sasuke và Itachi đã gặp nhau. Và trận chiến cuối cùng đã xảy ra với chiến thắng của Sasuke.
Madara xuất hiện và sự thật về Itachi đã đc hé lộ...bí mật về Gia tộc Uchiha và Làng Lá đã tạo nên bi kịch giữa Sasuke và Itachi. Nhóm Đại Bàng được thành lập kết hợp cùng Akatsuki chính thức truy tìm 9 quái vật có đuôi và bắt đầu kế hoạch trả thù của Sasuke ..........','https://orig00.deviantart.net/3a9c/f/2012/191/c/d/naruto_cute_by_tania15-d56p6av.jpg'),
('Conan','Mở đầu câu truyện, cậu học sinh trung học 17 tuổi Shinichi Kudo bị biến thành cậu bé Conan Edogawa. Shinichi trong phần đầu của Thám tử lừng danh Conan được miêu tả là một thám tử học đường xuất sắc. Trong một lần đi chơi công viên "Miền Nhiệt đới" với cô bạn từ thuở nhỏ Ran Mori, cậu tình cờ chứng kiến vụ một án giết người, Kishida - một hành khách trong trò chơi Chuyến tàu tốc hành đã bị giết một cách dã man. Cậu đã giúp cảnh sát làm sáng tỏ vụ án. Trên đường về nhà, cậu vô tình phát hiện một vụ làm ăn mờ ám của những người đàn ông mặc toàn đồ đen. Khi chúng phát hiện ra cậu, Shinichi đã bị đánh ngất đi. Sau đó những người đàn ông áo đen đó đã cho cậu uống một thứ thuốc độc chưa qua thử nghiệm là Apotoxin-4869 với mục đích thủ tiêu cậu. Tuy nhiên chất độc đã không giết chết Kudo. Khi tỉnh lại, cậu bàng hoàng nhận thấy mình đã bị teo nhỏ lại thành hình dạng của một cậu học sinh tiểu học.

Theo lời khuyên của Tiến sĩ Hiroshi Agasa, Shinichi đã che giấu tung tích, để tránh việc hội Áo đen có thể phát hiện ra rằng cậu vẫn còn sống. Khi Ran hỏi tên cậu, Shinichi đã ghép "Conan" trong tên của Sir Arthur Conan Doyle và "Edogawa" trong tên của Edogawa Rampo, buột miệng nói ra tên mình là "Conan Edogawa". Tiến sĩ Agasa đã nói Conan là một người cháu của mình, nhưng hiện ông đang quá bận rộn không thể chăm sóc cho chú bé nên đã nhờ Ran trông nom Conan giúp mình. Ran nhận lời và từ đó Conan sống tại nhà của Ran tức văn phòng thám tử Mori, vừa che giấu thân phận vừa điều tra tung tích của Tổ chức Áo đen và tìm kiếm thuốc giải độc.

Cha của Ran, Kogoro Mori (Richard Moore) là một thám tử bất tài. Từ khi Conan giúp ông phá án, ông trở nên rất nổi tiếng với biệt danh "Mori ngủ gật". Vì bộ dạng bé nhỏ của Conan, cảnh sát chẳng mấy khi để tâm tới những phán đoán, suy luận của cậu bé. Conan, bằng cách bắn súng gây mê để cho ông Mori ngủ say, sau đó sử dụng thiết bị đổi giọng nói là chiếc nơ gắn trên cổ áo để','http://sohanews.sohacdn.com/thumb_w/660/2018/photo1515026611110-1515026611110.jpg'),
('Doraemon', 'Các câu chuyện trong Doraemon thường có một công thức chung, đó là xoay quanh những rắc rối hay xảy ra với cậu bé Nobita học lớp bốn, nhân vật chính thứ nhì của bộ truyện. Doraemon có một chiếc túi thần kỳ trước bụng với đủ loại bảo bối của tương lai. Cốt truyện thường gặp nhất sẽ là Nobita trở về nhà khóc lóc với những rắc rối mà cậu gặp phải ở trường hoặc với bạn bè. Sau khi bị cậu bé van nài hoặc thúc giục, Doraemon sẽ đưa ra một bảo bối giúp Nobita giải quyết những rắc rối của mình, hoặc là để trả đũa hay khoe khoang với bạn bè của cậu. Nobita sẽ lại thường đi quá xa so với dự định ban đầu của Doraemon, thậm chí với những bảo bối mới cậu còn gặp rắc rối lớn hơn trước đó. Đôi khi những người bạn của Nobita, thường là Suneo (Xêkô) hoặc Jaian (Chaien) lại lấy trộm những bảo bối và sử dụng chúng không đúng mục đích. Tuy nhiên thường thì ở cuối mỗi câu chuyện, những ai sử dụng sai mục đích bảo bối sẽ phải chịu hậu quả do mình gây ra, và người đọc sẽ rút ra được bài học từ đó','https://genknews.genkcdn.vn/2017/photo-0-1506330689884.jpg'),
('Dragon Ball','Các bạn đã quá Quen thuộc với Bộ truyện tranh 7 Viên ngọc rồng lừng lẫy đúng không nào ??? Nhưng chắc chắn bạn chưa một lần "Quen" với một bản truyện chất lượng Cực cao như vầy , Phải nói nó được Edit rõ , đẹp và to chưa từng thấy ( Có trang độ phân giải lên tơí : 4240px × 1536px ), Thậm chí vài Chap đầu còn có màu .... Nói chung Dù đã coi đi coi lại bộ truyện này hơn hai chục lần nhưng mình vẫn cảm thấy Mê mẩn ..... Các bạn cứ thử xem sẽ rõ !!!','https://images2-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&gadget=a&no_expand=1&refresh=604800&url=http://image.phimmoi.net/post/2017/04/12/772377.jpg');

INSERT INTO manga_type(id_manga,id_type)
VALUES(1,1),(1,2),(1,3),(1,4),(1,5),(2,6),(2,3),(2,9),(2,10),(3,''6),(3,''2),(3,''7),(3,''8),(3,''5),(4,''6),(4,''2),(4,''3);


INSERT INTO chapter(id_manga,name)
VALUES(1, 'Chap 1'),(1, 'Chap 2'),(1, 'Chap 3'),(1, 'Chap 4'),(1, 'Chap 5'),(2,'Chap 1'),(2,'Chap 2'),(2,'Chap 3'),(2,'Chap 4'),(3,'''Chap 1'),(3,'''Chap 2'),(3,'''Chap 3');

INSERT INTO chapter_detail(chapter_detail.id_chapter,chapter_detail.img)
VALUES
(1,'https://2.bp.blogspot.com/-bcHvDMZIJyI/Vjr8RS4oixI/AAAAAAAAhz8/bQKBuPUkflk/563afc4230f32.jpg?imgmax=16383'),
(1,'https://4.bp.blogspot.com/-pb0tL2TDB4Q/Vjr8SnX-j6I/AAAAAAAAh0E/HnGfTPRYQy8/563afc46568b1.jpg?imgmax=16383'),
(1,'https://4.bp.blogspot.com/-DFBYVS-R-EU/Vjr8U6ocmzI/AAAAAAAAh0U/7Z2J85Ep8S0/563afc4e5d8d0.jpg?imgmax=16383'),
(2,'https://1.bp.blogspot.com/-GHLwe3E26u4/WuZFczzpFxI/AAAAAAABoGU/2uodrc8llRk7GHaAVdnTc_KwtCLG9V-rgCHMYCw/01.jpg?imgmax=16383'),
(2,'https://1.bp.blogspot.com/-72NSY0dzbDI/WuZFdTQNqXI/AAAAAAABoGY/Oukf-O1jb-UWq42s_2mQ4cXC6rqw8U8-wCHMYCw/02.jpg?imgmax=16383'),
(2,'https://1.bp.blogspot.com/-K6YjDtOChsA/WuZFd2wG2eI/AAAAAAABoGc/PGUTt_XFRAc4qjoQ-EkSjbWEXswLLdBPACHMYCw/03.jpg?imgmax=16383'),
(3,'https://1.bp.blogspot.com/-PtL3gQ9XK-4/WuZFoiDzixI/AAAAAAABoH0/_55AlC-tFh4iolnuZ2boHce9jeLpOo0ugCHMYCw/naruto01-0085.jpg?imgmax=16383'),
(3,'https://1.bp.blogspot.com/-Red7JtG2eBk/WuZFpMVOKMI/AAAAAAABoH4/QGaJH7E2o7A9FW_rmFmf-Tb6-PbR_4GaACHMYCw/naruto01-0086.jpg?imgmax=16383'),
(3,'https://1.bp.blogspot.com/-2D5pekNhx_U/WuZFpwgZ4VI/AAAAAAABoH8/jRMdhKIaHogLCroduEX9HXokmlkfxavRwCHMYCw/naruto01-0087.jpg?imgmax=16383'),
(4,'https://1.bp.blogspot.com/-6Men7M1a7bo/WuZF19Pyv7I/AAAAAAABoJU/w-OijW9pJ1ge8wUcxICwEqsMWS8rAc2mwCHMYCw/naruto01-0109.jpg?imgmax=16383'),
(4,'https://1.bp.blogspot.com/--99nThguIBc/WuZF2Rg1NLI/AAAAAAABoJY/gs8j9l5NrXUhfeD6sNml6rJPZbHH--b-ACHMYCw/naruto01-0110.jpg?imgmax=16383'),
(4,'https://1.bp.blogspot.com/-75jEFBghcow/WuZF23qe9mI/AAAAAAABoJc/PdWo4wNRHlomyq8CfgnUy6fGltdiDHfKgCHMYCw/naruto01-0111.jpg?imgmax=16383'),
(5,'https://1.bp.blogspot.com/-ViA0iZjez6Q/WuZGBhLGWpI/AAAAAAABoKk/dTzF6yXl6w4Y1gy3ri5PEzqJW_D71fsEwCHMYCw/naruto01-0129-20.jpg?imgmax=16383'),
(5,'https://1.bp.blogspot.com/-7-H0bvHAqLg/WuZGCGkRs4I/AAAAAAABoKo/OjmhaGnwS5o4nJtCVHuJQkVDc7j89kC4ACHMYCw/naruto01-0130.jpg?imgmax=16383'),
(5,'https://1.bp.blogspot.com/-HC6Vo5Yvulo/WuZGCkKzFTI/AAAAAAABoKs/w3_fMP4JzLAX_TrsfgJvMp_s8W8GB-GAwCHMYCw/naruto01-0131.jpg?imgmax=16383'),

(6,'https://1.bp.blogspot.com/-DjfKI6iA74c/WujbxJd7lzI/AAAAAAACzCI/1FIrn7GIB4g6ID2DmRDoxSV-3Jzw5g0FQCHMYCw/006.jpg?imgmax=16383'),
(6,'https://1.bp.blogspot.com/-UPX_hSXJsbI/WujbyXoMl4I/AAAAAAACzCM/ZiALL7IUhWU0mC0_skUOlecguAXvf_SegCHMYCw/007.jpg?imgmax=16383'),
(6,'https://1.bp.blogspot.com/-_2v9JzCXB-s/WujbzXKwDII/AAAAAAACzCQ/9vTP4gvLjXQXLLnVPgebwUp5zRTo5J4EQCHMYCw/008.jpg?imgmax=16383'),
(7,'https://1.bp.blogspot.com/-rciUrq0s-qQ/WujcIVuMQtI/AAAAAAACzEc/VJeqnVGSh1MkUrOxL9EY6IYTltv2aAKLACHMYCw/002.jpg?imgmax=16383'),
(7,'https://1.bp.blogspot.com/-KISrhwHLQiI/WujcJQZj6PI/AAAAAAACzEg/VNX2nRu9WmQ_ZX8UnOj3r3xpthrWtbtrQCHMYCw/003.jpg?imgmax=16383'),
(7,'https://1.bp.blogspot.com/-0f0fzGFnBV0/WujcKcbHmpI/AAAAAAACzEk/Bi12CWKtAzMToVmlfW8Fq83ii6ZKLSQCQCHMYCw/004.jpg?imgmax=16383'),
(8,'https://1.bp.blogspot.com/-4XdDpRp3m38/WujchY9xHQI/AAAAAAACzGM/VDXfHE6M4J0XEg6_O6s1JRga_aV5vJVEwCHMYCw/002.jpg?imgmax=16383'),
(8,'https://1.bp.blogspot.com/-2YbJHS8lduM/WujcimtJ2hI/AAAAAAACzGU/vV7YcZkdi-IfABa5SWY8Ooh3OiSPN1f5gCHMYCw/003.jpg?imgmax=16383'),
(8,'https://1.bp.blogspot.com/-M_10Kee6L6s/WujcjWpTXaI/AAAAAAACzGY/mng9ZVm4XiEiRRTq-NWZDkP3kxjJ95PsACHMYCw/004.jpg?imgmax=16383'),
(9,'https://1.bp.blogspot.com/-WGsCIKcamVw/Wunk11c-QCI/AAAAAAADKxs/mNqgqosfZZ880JuGo8RLsVMmUIs4OhqVQCHMYCw/002.jpg?imgmax=16383'),
(9,'https://1.bp.blogspot.com/-gFdffgcf4nE/Wunk21bojMI/AAAAAAADKxw/LanOXn1iAlI2131sIL7hi16AFXFLYQ35wCHMYCw/003.jpg?imgmax=16383'),
(9,'https://1.bp.blogspot.com/-FzzG-ZORUh4/Wunk36j-FRI/AAAAAAADKx0/pjRWAER4O80cy_5T35M_bq9RBLr1xIN_QCHMYCw/004.jpg?imgmax=16383'),

(10,'https://2.bp.blogspot.com/_4_2VYeRBrbc/TbUe7VmodsI/AAAAAAAAAME/CuIH616dzY4/Chap%20001-02.jpg?imgmax=16383'),
(10,'https://2.bp.blogspot.com/_4_2VYeRBrbc/TbUe-9acDZI/AAAAAAAAAMM/U-_zkeboyEk/Chap%20001-03.jpg?imgmax=16383'),
(10,'https://2.bp.blogspot.com/_4_2VYeRBrbc/TbUfDPb_8_I/AAAAAAAAAMU/19OttDkqaG4/Chap%20001-04.jpg?imgmax=16383'),
(11,'https://2.bp.blogspot.com/_4_2VYeRBrbc/TbUdu8_nkzI/AAAAAAAAAJE/5fkfGOYqnKA/Chap%20002-02.jpg?imgmax=16383'),
(11,'https://2.bp.blogspot.com/_4_2VYeRBrbc/TbUdz7Jz9cI/AAAAAAAAAJM/qX9pc2zmrwM/Chap%20002-03.jpg?imgmax=16383'),
(11,'https://2.bp.blogspot.com/_4_2VYeRBrbc/TbUd29WHaYI/AAAAAAAAAJc/oan7OqHSGNU/Chap%20002-04.jpg?imgmax=16383'),
(12,'https://2.bp.blogspot.com/_2m-rL4Tu1fI/TbMb3t1JMuI/AAAAAAAACEc/QqMssGtBMZ4/Chap%20003-01.jpg?imgmax=16383'),
(12,'https://2.bp.blogspot.com/_2m-rL4Tu1fI/TbMb5X_99GI/AAAAAAAACEs/QcoGDsCfo0g/Chap%20003-02.jpg?imgmax=16383'),
(12,'https://2.bp.blogspot.com/_2m-rL4Tu1fI/TbMb_8IN9BI/AAAAAAAACFQ/tzIXFvbM7rk/Chap%20003-03.jpg?imgmax=16383');

ALTER TABLE manga AUTO_INCREMENT = 1;

SELECT t.name
FROM manga AS m INNER JOIN manga_type AS mt ON m.id_manga = mt.id_manga INNER JOIN type AS ON mt.id_type = t.id_type
WHERE m.id = 1


