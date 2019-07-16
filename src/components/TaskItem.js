import React, { Component } from "react";

class TaskItem extends Component {
	onUpdateStatus = () => {
		this.props.onUpdateStatus(this.props.task.id);
	};
	onDelete=(id)=>{
		this.props.onDelete(this.props.task.id)
	}
	onUpdate=(id)=>{
		this.props.onUpdate(this.props.task.id)
	}
	render() {
		//nhận  this.props.{ tasks , index} truyền  từ App=>TasksList=>TasksItem
		var { task, index } = this.props;
		return (
			<tr>
				<td> {index + 1} </td>
				<td> {task.name} </td>
				<td className="text-center">
					<span
						className={
							task.status === true ? "label label-success" : "label label-info"
						}
						onClick={this.onUpdateStatus}
					>
						{task.status === true ? "Kich Hoat" : "An"}
					</span>
				</td>
				<td className="text-center">
					<button
						type="button"
						className="btn btn-warning" onClick={this.onUpdate}
					>
						<span className="fa fa-pencil mr-5" />
						Sửa
					</button>
					&nbsp;
					<button
						type="button"
						className="btn btn-danger" onClick={this.onDelete}
					>
						<span className="fa fa-trash mr-5" />
						Xóa
					</button>
				</td>
			</tr>
		);
	}
}

export default TaskItem;
