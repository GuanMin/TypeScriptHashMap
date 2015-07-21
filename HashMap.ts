class HashMap {
	//���峤��
	//����һ������
	private obj = {};

	/**
	 * �ж�Map�Ƿ�Ϊ��
	 */
	public isEmpty():boolean {
		return Object.keys(this.obj).length == 0;
	}

	/**
	 * �ж϶������Ƿ��������Key
	 */
	public containsKey(key):boolean {
		return (key in this.obj);
	}

	/**
	 * �ж϶������Ƿ����������Value
	 */
	public containsValue(value):boolean {
		for (var key in this.obj) {
			if (this.obj[key] == value) {
				return true;
			}
		}
		return false;
	}

	/**
	 *��map���������
	 */
	public put(key, value):void {
		this.obj[key] = value;
	}

	/**
	 * ���ݸ�����Key���Value
	 */
	public get(key):any {
		return this.containsKey(key) ? this.obj[key] : null;
	}

	/**
	 * ���ݸ�����Keyɾ��һ��ֵ
	 */
	public remove(key):void {
		if (this.containsKey(key)) {
			delete this.obj[key]
		}
	}

	/**
	 * ���Map�е�����Value
	 */
	public values():any {
		var _values = new Array();
		for (var key in this.obj) {
			_values.push(this.obj[key]);
		}
		return _values;
	}

	/**
	 * ���Map�е�����Key
	 */
	public keySet():any {
		var _keys = new Array();
		for (var key in this.obj) {
			_keys.push(key);
		}
		return _keys;
	}

	/**
	 * ���Map�ĳ���
	 */
	public size():number {
		return Object.keys(this.obj).length;
	}

	/**
	 * ���Map
	 */
	public clear():void {
		this.obj = {};
	}
}