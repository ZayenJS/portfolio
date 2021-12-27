import { FC } from 'react';

import classes from './Admin.module.scss';

export interface AdminProps {}

const Admin: FC<AdminProps> = () => {
	return (
		<div className={classes.Container}>Admin Component</div>
	);
}

export default Admin;