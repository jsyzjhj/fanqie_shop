<?php if (! defined ( 'BASEPATH' ))	exit ( 'No direct script access allowed' );
/**
 * 评论
 * @author chaituan@126.com
 */
class Comments extends MY_Model {
	function __construct() {
		parent::__construct ();
		$this->table_name = 'tie_comment';
	}
}