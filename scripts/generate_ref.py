import yaml, cgi

refFile = open('ugen_reference.yml')
data = yaml.load(refFile)
refFile.close()
for ugen in data: data[ugen].update({'name': ugen})
data = [(data[k]) for k in sorted(data)]

######################################
# create static/ugen_reference.html

out = ''
for ugen in data:
	out += '<b>' 
	if 'Link' in ugen:
		out += '<a href="/learn/ugens_' + ugen['Link'] + '">' + cgi.escape(ugen['name']) + '</a>'
	else:
		out += cgi.escape(ugen['name'])
	out += '</b><div>' 
	if 'Args' in ugen:
		out += ', '.join(ugen['Args']) + '<br>'
	out += '<i>' + ugen['Description'] + '</i></div>\n'

outFile = open('../static/ugen_reference.html', 'w')
outFile.write('<body>\n' + out + '</body>\n')
outFile.close()

######################################
# create tutorial/ugens.html

out = ''
for ugen in data:
	out += '<b>' 
	if 'Link' in ugen:
		out += '<a href="/learn/ugens_' + ugen['Link'] + '">' + cgi.escape(ugen['name']) + '</a>'
	else:
		out += cgi.escape(ugen['name'])
	out += '</b><div><i>' + ugen['Description'] + '</i></div><br>\n'

outFile = open('../templates/tutorial/ugens.html', 'w')
outFile.write("""<head><title></title></head><body><div id="main" class="ugen_list">
<!-- THIS FILE IS GENERATED - changes will be overwritten. -->
<h1>A list of Unit Generators in Sporth</h1>
<p>Below is a list of Sporth Unit generators that can be used in-browser. 
Some of these ugens have links with short simple examples. </p>
""" + out + '</div></body>')
outFile.close()

######################################
# create static/ugen_reference.js

jsUgens = []
for ugen in data:
	if set(ugen['name']).intersection(set('.\+*?[^]$(){}=!<>|:-')):
		continue
	jsUgen = "'" + ugen['name'] + "': { 'Args': [ "
	if 'Args' in ugen:
		jsUgen += ', '.join("'{0}'".format(a) for a in ugen['Args'])
	jsUgen += " ], 'Outputs': " + str(ugen['Outputs'])
	jsUgen += " , 'Description': '" + ugen['Description'].replace("'","\\'") + "'}"
	jsUgens.append(jsUgen)

out = 'ugen_ref = {\n' + ',\n'.join(jsUgens) + '}\n'
outFile = open('../static/ugen_reference.js', 'w')
outFile.write(out)
outFile.close()