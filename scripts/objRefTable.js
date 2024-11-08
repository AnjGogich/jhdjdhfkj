const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Platform,
		C3.Behaviors.scrollto,
		C3.Behaviors.solid,
		C3.Plugins.Camera3D,
		C3.Plugins.Shape3D,
		C3.Plugins.Sprite.Cnds.CompareY,
		C3.Plugins.System.Acts.RestartLayout
	];
};
self.C3_JsPropNameTable = [
	{Платформер: 0},
	{СледитьЗа: 0},
	{Спрайт: 0},
	{Твёрдый: 0},
	{Спрайт2: 0},
	{Спрайт3: 0},
	{Спрайт4: 0},
	{Спрайт5: 0},
	{Спрайт6: 0},
	{Спрайт7: 0},
	{Спрайт8: 0},
	{Спрайт9: 0},
	{Спрайт10: 0},
	{"3DКамера": 0},
	{"3DФигуры": 0},
	{Спрайт11: 0},
	{Спрайт12: 0}
];

self.InstanceType = {
	Спрайт: class extends self.ISpriteInstance {},
	Спрайт2: class extends self.ISpriteInstance {},
	Спрайт3: class extends self.ISpriteInstance {},
	Спрайт4: class extends self.ISpriteInstance {},
	Спрайт5: class extends self.ISpriteInstance {},
	Спрайт6: class extends self.ISpriteInstance {},
	Спрайт7: class extends self.ISpriteInstance {},
	Спрайт8: class extends self.ISpriteInstance {},
	Спрайт9: class extends self.ISpriteInstance {},
	Спрайт10: class extends self.ISpriteInstance {},
	_3DКамера: class extends self.IInstance {},
	_3DФигуры: class extends self.I3DShapeInstance {},
	Спрайт11: class extends self.ISpriteInstance {},
	Спрайт12: class extends self.ISpriteInstance {}
}