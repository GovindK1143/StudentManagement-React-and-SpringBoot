package com.web.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="STUDENT_MARKS")
public class Student {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)	
	private Integer id;
	private String name;
	
	private Integer sub1;
	private Integer sub2;
	private Integer sub3;
	private Integer sub4;
	private Integer sub5;
	
	private Double total;
	
	private Double percent;
	
	private String grade;
	
	private String res;

	public Student() {
		super();
	}

	public Student(Integer id, String name, Integer sub1, Integer sub2, Integer sub3, Integer sub4, Integer sub5,
			Double total, Double percent, String grade, String res) {
		super();
		this.id = id;
		this.name = name;
		this.sub1 = sub1;
		this.sub2 = sub2;
		this.sub3 = sub3;
		this.sub4 = sub4;
		this.sub5 = sub5;
		this.total = total;
		this.percent = percent;
		this.grade = grade;
		this.res = res;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Integer getSub1() {
		return sub1;
	}

	public void setSub1(Integer sub1) {
		this.sub1 = sub1;
	}

	public Integer getSub2() {
		return sub2;
	}

	public void setSub2(Integer sub2) {
		this.sub2 = sub2;
	}

	public Integer getSub3() {
		return sub3;
	}

	public void setSub3(Integer sub3) {
		this.sub3 = sub3;
	}

	public Integer getSub4() {
		return sub4;
	}

	public void setSub4(Integer sub4) {
		this.sub4 = sub4;
	}

	public Integer getSub5() {
		return sub5;
	}

	public void setSub5(Integer sub5) {
		this.sub5 = sub5;
	}

	public Double getTotal() {
		return total;
	}

	public void setTotal(Double total) {
		this.total = total;
	}

	public Double getPercent() {
		return percent;
	}

	public void setPercent(Double percent) {
		this.percent = percent;
	}

	public String getGrade() {
		return grade;
	}

	public void setGrade(String grade) {
		this.grade = grade;
	}

	public String getRes() {
		return res;
	}

	public void setRes(String res) {
		this.res = res;
	}

	@Override
	public String toString() {
		return "Student [id=" + id + ", name=" + name + ", sub1=" + sub1 + ", sub2=" + sub2 + ", sub3=" + sub3
				+ ", sub4=" + sub4 + ", sub5=" + sub5 + ", total=" + total + ", percent=" + percent + ", grade=" + grade
				+ ", res=" + res + "]";
	}
	
	
	
	

}
