package com.krader.app.model;
// Generated Aug 7, 2018 9:16:41 PM by Hibernate Tools 5.2.11.Final

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import static javax.persistence.GenerationType.IDENTITY;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

/**
 * Author generated by hbm2java
 */
@Entity
@Table(name = "author", catalog = "ComicDB", uniqueConstraints = @UniqueConstraint(columnNames = "name"))
public class Author implements java.io.Serializable {

	private Integer idAuthor;
	private String name;

	public Author() {
	}

	public Author(String name) {
		this.name = name;
	}

	@Id
	@GeneratedValue(strategy = IDENTITY)

	@Column(name = "id_author", unique = true, nullable = false)
	public Integer getIdAuthor() {
		return this.idAuthor;
	}

	public void setIdAuthor(Integer idAuthor) {
		this.idAuthor = idAuthor;
	}

	@Column(name = "name", unique = true, nullable = false)
	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

}