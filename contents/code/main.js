/********************************************************************
Copyright (C) 2013 Fabian Homborg <FHomborg@gmail.com>

This program is free software; you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation; either version 2 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
*********************************************************************/

function switchTo() {
	try {
		var self = this;
		workspace.clientAdded.connect(function (client) {
			self.addClient(client);
		});
	} catch(err) {
		print(err, "in switchTo");
	}
}
	
switchTo.prototype.addClient = function(client) {
	if (client.currentDesktop != workspace.currentDesktop) {
		workspace.currentDesktop = client.currentDesktop;
	}
};

s = new switchTo();
