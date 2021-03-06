package com.krader.app.model;
// Generated Aug 9, 2018 3:31:01 PM by Hibernate Tools 5.2.11.Final

import javax.persistence.Column;
import javax.persistence.Embeddable;

/**
 * MangaTypeId generated by hbm2java
 */
@Embeddable
public class MangaTypeId implements java.io.Serializable {

	private int idType;
	private int idManga;

	public MangaTypeId() {
	}

	public MangaTypeId(int idType, int idManga) {
		this.idType = idType;
		this.idManga = idManga;
	}

	@Column(name = "id_type", nullable = false)
	public int getIdType() {
		return this.idType;
	}

	public void setIdType(int idType) {
		this.idType = idType;
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
		if (!(other instanceof MangaTypeId))
			return false;
		MangaTypeId castOther = (MangaTypeId) other;

		return (this.getIdType() == castOther.getIdType()) && (this.getIdManga() == castOther.getIdManga());
	}

	public int hashCode() {
		int result = 17;

		result = 37 * result + this.getIdType();
		result = 37 * result + this.getIdManga();
		return result;
	}

}
