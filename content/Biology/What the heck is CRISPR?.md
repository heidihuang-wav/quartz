---
title: What the heck is CRISPR?
tags:
  - Biology
---
## Intro
I hope learning more about relevant biology topics will allow me to:
1. 🌟 ask better questions, form more connections among different areas of knowledge
2. be a more informed and helpful research assistant 
3. have a more solid foundation in biology 

---

> [!info] CRISPR stands for Clustered Regularly Interspaced Short Palindromic Repeats

## Cas9: from nature to the lab
- In nature, CRISPR gives prokaryotes immunity to viruses
	- prokaryotes that survive virus attacks stores a fragment of the virus' DNA so the prokaryote can recognize the virus during future encounters with the virus
- There are many natural CRISPR systems; CRISPR-Cas9 is one of them
	- ✂️ Cas9 protein: they do the cutting of the DNA
	- 🦯 Guide RNA: small, customizable molecule that tells the Cas9 protein where to cut in a DNA sequence ^8f88c1
### Delivering Cas9 into a cell
- Transforming plasmids (for bacteria)
- Electroporation
- Chemical stimulation
- Viral delivery (for human cells)
- Agrobacterium transformation (for plants)
- Microinjecting eggs or embryos (for animal models)
### Guide RNA composition in nature vs. in the lab
- In nature, 2 separate RNA molecules guide Cas9
	- CRISPR RNA (crRNA): determines what side Cas9 will cut
	- Trans-activating CRISPR RNA (tracrRNA): base pairs with crRNA, acts as a handle for Cas9
- In the lab
	- Single-guide RNA (sgRNA): one continuous molecule made up of crRNA + tracrRNA
### Using CRISPR in eukaryotic vs. prokaryotic cells
- Challenges to editing DNA in eukaryotes
	- Delivering CRISPR tools to cell nucleus 
		- Solution: Adding a **nuclear localization signal** (NLS), a short tag, to the Cas9 protein to tell the cell to pull Cas9 into the nucleus
	- Letting CRISPR tools/other enzymes get to DNA, which is wrapped around histones, so may be tougher to access
- Challenges to editing DNA in prokaryotes
	- Lack of good DNA repair systems: making cuts often kills the cell 
		- Solution: Using CRISPR tools that don't cut through both DNA strands, like base editors (directly changes single DNA letter without making breaks in DNA) and CRISPRi (CRISPR interference/inhibition)

## Cas9 Structure-Function
![[Images/CAS9ComplexUnboundWithPymolAndMap-1024x597.png]]
☝️ The Cas9 protein is comprised of six domains: Rec I, Rec II, Bridge Helix, RuvC, HNH, and PAM Interacting. Domains are shown in schematic, crystal, and map form. (original figure) (crystal image rendered from PDB: 4CMP [Jinek et al. 2014](https://sites.tufts.edu/crispr/references/ "References").)

### Cas9 protein and how it works
- Cas9: single, 2-lobed protein made of **domains** (dynamic regions) 
	- Recognition lobe (REC) - top lobe, carries [[Biology/What the heck is CRISPR?#^8f88c1|guide RNA]] (gRNA)
	- Nuclease lobe (NUC) - bottom lobe, contains 2 separate nuclease domains: HNH and RuvC, make up the blades of the molecular scissors
### Identifying the right DNA target
#### PAM Recognition
- Cas9-gRNA complex searches for matching DNA sequences
- **PAM-interacting domain** (region of the nuclease lobe) looks for **PAM**s (protospacer adjacent motifs)
	- PAMs help Cas proteins avoid cutting the prokaryotes' own DNA; PAMs are found in phage DNA but never in bacterial CRISPR assays
- Different CRISPR nucleases bind to unique PAMs because their PAM-interacting domains are made up of distinct amino acids
#### Base-Pairing
- After binding to a PAM, Cas9 unwinds the adjacent DNA double helix


--- 
to be continued...