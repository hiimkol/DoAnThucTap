package com.krader.app.model;
// Generated Aug 9, 2018 3:31:01 PM by Hibernate Tools 5.2.11.Final

import javax.persistence.Column;
import javax.persistence.Embeddable;

/**
 * ReaderMangaId generated by hbm2java
 */
@Embeddable
public class ReaderMangaId implements java.io.Serializable {

	private String username;
	private int idManga;

	public ReaderMangaId() {
	}

	public ReaderMangaId(String username, int idManga) {
		this.username = username;
		this.idManga = idManga;
	}

	@Column(name = "username", nullable = false)
	public String getUsername() {
		return this.username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	@Column(name = "id_manga", nullable = false)
	public int getIdManga() {
		return this.idManga;
	}

	public void setIdManga(int idManga) {
		this.idManga = idManga;
	}

	public boolean equals(Object other) {
		if ((this == other))
			return true;
		if ((other == null))
			return false;
		if (!(other instanceof ReaderMangaId))
			return false;
		ReaderMangaId castOther = (ReaderMangaId) other;

		return ((this.getUsername() == castOther.getUsername()) || (this.getUsername() != null
				&& castOther.getUsername() != null && this.getUsername().equals(castOther.getUsername())))
				&& (this.getIdManga() == castOther.getIdManga());
	}

	public int hashCode() {
		int result = 17;

		result = 37 * result + (getUsername() == null ? 0 : this.getUsername().hashCode());
		result = 37 * result + this.getIdManga();
		return result;
	}

}
