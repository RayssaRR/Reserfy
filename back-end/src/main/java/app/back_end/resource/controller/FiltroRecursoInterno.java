package app.back_end.resource.controller;

public class FiltroRecursoInterno {
	
	private int page = 0;
	private int size = 10;
	private String status;
	
	public int getPage() { return page; }
	public void setPage(int page) { this.page = page; }
	
	public int getSize() { return size; }
	public void setSize(int size) { this.size = size; }
	
	public String getStatus() { return status; }
	public void setStatus(String status) { this.status = status; }
}
