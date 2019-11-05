
function fromSpeckleMesh(speckle_mesh) {
	if (!speckle_mesh.type.includes("Mesh")) { return; }

	let _mesh = new _rhino3dm.Mesh();
	//let _mesh = {
	//	verts: new _rhino3dm.MeshVertexList(),
	//	faces: null,
	//};

	for (var i = 0; i < speckle_mesh.vertices.length; i += 3)
	{
		_mesh.vertices().add(
			speckle_mesh.vertices[i], 
			speckle_mesh.vertices[i + 1], 
			speckle_mesh.vertices[i + 2])
	}

	for (var i = 0; i < speckle_mesh.faces.length;)
	{
		if (speckle_mesh.faces[i] == 0)
		{
			_mesh.faces().addFace(
				speckle_mesh.faces[i + 1], 
				speckle_mesh.faces[i + 2], 
				speckle_mesh.faces[i + 3])
			i += 4;
		}
		else if (speckle_mesh.faces[i] == 1)
		{
			_mesh.faces().addFace(
				speckle_mesh.faces[i + 1], 
				speckle_mesh.faces[i + 2], 
				speckle_mesh.faces[i + 3], 				
				speckle_mesh.faces[i + 4])
			i += 5;
		}
		else
		{
			break;
		}
	}

	return _mesh;
}
